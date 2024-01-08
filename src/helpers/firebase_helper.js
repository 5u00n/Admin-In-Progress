import firebase from 'firebase/compat/app';

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
//import "firebase/compat/firestore";


class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          user => {
            resolve(firebase.auth().currentUser);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };




  /**
   * Registers the user with given details
   */
  editProfileAPI = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          user => {
            resolve(firebase.auth().currentUser);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };


  addUser = (email, password) => {
    return new Promise((resolve, reject) => {
      try {
        const userCredential = firebase.auth().createUserWithEmailAndPassword(email, password);
        resolve(userCredential)

        // You may perform additional actions after adding the user

      } catch (error) {
        reject(error.message);
      }
    });
  };

  /**
   * Login user with given details
   */
  loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            resolve(firebase.auth().currentUser);
          },
          error => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * forget Password user with given details
   */
  forgetPassword = email => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email, {
          url:
            window.location.protocol + "//" + window.location.host + "/login",
        })
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Social Login user with given details
   */
  socialLoginUser = (data, type) => {
    let credential = {};
    if (type === "google") {
      credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.token);
    } else if (type === "facebook") {
      credential = firebase.auth.FacebookAuthProvider.credential(data.token);
    }
    return new Promise((resolve, reject) => {
      if (!!credential) {
        firebase.auth().signInWithCredential(credential)
          .then(user => {
            resolve(this.addNewUserToFirestore(user));
          })
          .catch(error => {
            reject(this._handleError(error));
          });
      } else {
        // reject(this._handleError(error));
      }
    });
  };

  addNewUserToFirestore = (user) => {
    const collection = firebase.firestore().collection("users");
    const { profile } = user.additionalUserInfo;
    const details = {
      firstName: profile.given_name ? profile.given_name : profile.first_name,
      lastName: profile.family_name ? profile.family_name : profile.last_name,
      fullName: profile.name,
      email: profile.email,
      picture: profile.picture,
      createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
    };
    collection.doc(firebase.auth().currentUser.uid).set(details);
    return { user, details };
  };

  setLoggeedInUser = user => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem("authUser")) return null;
    return JSON.parse(localStorage.getItem("authUser"));
  };

  /**
     * Fetch data from the Realtime Database at a specific path
     */
  fetchDataRequest = async (path) => {
    return new Promise((resolve, reject) => {
      const databaseRef = firebase.database().ref(path);
      databaseRef.on('value', (snapshot) => {
        //console.log("Fire  " + snapshot.val());
        resolve(snapshot.val());
      });
    });
  };


  fetchDataRealtime = async (path) => {
    return new Promise((resolve, reject) => {
      const databaseRef = firebase.database().ref(path);
      databaseRef.on('value', (snapshot) => {
        resolve(snapshot.val());
      });
    });
  }



  fetchDataOnce = async (path) => {
    const snapshot = await firebase.database().ref(path).once('value');
    const data = snapshot.val();
    //console.log("From firesebase_helper   " + snapshot.val());
    const formattedData = [];

    for (let id in data) {
      formattedData.push({
        id,
        ...data[id]
      });
    }

    return data;
  };

  fetchDataRef = (path) => {
    if (path === null) {
      return firebase.database().ref();
    }
    return firebase.database().ref(path)
  }

  uploadDataWithId = (path, data) => {
    return new Promise((resolve, reject) => {
      const databaseRef = firebase.database().ref(path);
      const newChildRef = databaseRef.push(); // This creates a new child location using a unique key
      newChildRef.set(data, (error) => {
        if (error) {
          reject(this._handleError(error)); // Handle the error if upload fails
        } else {
          resolve(newChildRef.key); // Resolve with the unique key of the newly added data
        }
      });
    });
  };

  uploadSchoolData = (schoolData) => {
    return this.uploadDataWithId('/schools', schoolData);
  };




  /**
   * 
   * @param {get school refernece point} schoolName 
   */
  fetchSchoolData = async (schoolName) => {
    const schoolRef = firebase.database().ref(schoolName);
    return schoolRef;
  }

  /**
   * 
   * @param {get school users refernece point} schoolName
   */
  fetchSchoolUsers = async (schoolName, usersType) => {
    const schoolUsesRef = firebase.database().ref(schoolName).child(usersType);
    return schoolUsesRef;
  }


  uploadImageAndGetURL = (imageFile, path) => {
    return new Promise((resolve, reject) => {
      const storageRef = firebase.storage().ref(path);
      const uploadTask = storageRef.put(imageFile);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // Optional: Handle progress updates
          // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(this._handleError(error));
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  uploadSchoolDataWithLogo = (schoolData, logoFile, userData) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Upload the logo image and get its download URL

        const school_short = schoolData.school_name.split(' ').map(word => word[0]).join('').toUpperCase();
        const school_id = school_short + '-' + new Date().getTime();
        const logoPath = `schools/${school_id}/logo/${logoFile.name}`;
        const usersPath = `/users`;
        const logoDownloadURL = await this.uploadImageAndGetURL(logoFile, logoPath);

        // Add logo URL to school data
        schoolData.id = school_id;
        schoolData.school_logo = logoDownloadURL;
        schoolData.school_short = school_short;

        //schoolData.created_by= firebase.auth().currentUser.uid;
        schoolData.created_on = new Date().toLocaleDateString();
        schoolData.agreement= true;





        // Now, save the school data along with the logo URL to the Realtime Database
        const newSchoolRef = firebase.database().ref('/schools').child(school_id);
        newSchoolRef.set(schoolData, (error) => {
          if (error) {
            reject(this._handleError(error));
          } else {

            userData.map(async (user) => {
              const userUID = await this.addUser(user.email, user.pass);
              const userID= String(userUID.user.uid);


              const userRef = firebase.database().ref(usersPath).child(userID);              
              const schoolUserRef = newSchoolRef.child("admin").child(userID);
              const profilePath = `users/${userID}/profile_image/${user.profile_image.name}`;
              const profile_url = await this.uploadImageAndGetURL(user.profile_image, profilePath);
              user.id = userID;
              user.type = "admin";
              user.url = profile_url;

              userRef.set(user, (error) => {
                if (error) {
                  reject(this._handleError(error));
                } else {
                  schoolUserRef.set(user, (error) => {
                    if (error) {
                      reject(this._handleError(error));
                    } else {

                      resolve({ key: newSchoolRef.key, ...schoolData,...user });
                    }
                  });
                }
              });

            });
            // resolve({ key: newSchoolRef.key, ...schoolData });
          }
        });
      } catch (error) {
        reject(this._handleError(error));
      }
    });
  };





  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}

let _fireBaseBackend = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = config => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
