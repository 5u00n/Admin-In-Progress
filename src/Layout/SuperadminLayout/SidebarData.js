const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,
    },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: ""
    },
    {
        label: "Users",
        icon: "mdi mdi-account-circle",
        subItem: [
            { sublabel: "Students", link: "/users/students" },
            { sublabel: "Teachers", link: "/users/teachers" },
            { sublabel: "Parents", link: "/users/parents" },
            { sublabel: "Staff", link: "/users/staff" },
            { sublabel: "Admin", link: "/users/admin" },
            { sublabel: "Addmission", link: "/users/addmission" },

        ],
    },
    {
        label: "Acadamics",
        icon: "mdi mdi-school",
        subItem: [
            { sublabel: "Daily Attendance", link: "/acadamics/daily-attendance" },
            { sublabel: "Class Routine", link: "/acadamics/class-routine" },
            { sublabel: "Subject", link: "/acadamics/subject" },
            { sublabel: "Syllabus", link: "/acadamics/syllabus" },
            { sublabel: "Class", link: "/acadamics/class" },
            { sublabel: "Classroom", link: "/acadamics/classroom" },
            { sublabel: "Department", link: "/acadamics/department" },
            { sublabel: "Event Calendar", link: "/acadamics/event-calendar" },

        ],
    },
    {
        label: "Calendar",
        icon: "mdi mdi-calendar-outline",
        isHasArrow: true,
        url: "/acadamics/calendar",
    },
    {
        label: "Examinantion",
        icon: "mdi mdi-book-education",
        subItem: [
            { sublabel: "Examinantion", link: "/examination" },
            { sublabel: "Marks", link: "/examinantion/marks" },
            { sublabel: "Grades", link: "/examinantion/grades" },
            { sublabel: "Extra", link: "/examinantion/extra" },
        ],
    },
    {
        label: "Email",
        icon: "mdi mdi-email-outline",
        subItem: [
            { sublabel: "Inbox", link: "/inbox" },
            { sublabel: "Read Email", link: "/read-email" },
            { sublabel: "Email Compose", link: "/compose-email" },
        ],
    },
    {
        label: "School Setting",
        icon: "mdi mdi-cog",
        isHasArrow: true,
        url: "/school-setting",
    },

]
export default SidebarData;