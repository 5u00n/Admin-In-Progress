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
        badgeValue: "3"
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
            { sublabel: "Daily Attendance", link: "/daily-attendance" },
            { sublabel: "Class Routine", link: "/class-routine" },
            { sublabel: "Subject", link: "/subject" },
            { sublabel: "Syllabus", link: "/syllabus" },
            { sublabel: "Class", link: "/class" },
            { sublabel: "Department", link: "/department" },
            { sublabel: "Event Calander", link: "/event-calendar" },
            
        ],
    },
    {
        label: "Calendar",
        icon: "mdi mdi-calendar-outline",
        isHasArrow: true,
        url: "/calendar",
    },
    {
        label: "Examinantion",
        icon: "mdi mdi-book-education",
        subItem: [
            { sublabel: "Examinantion", link: "/examination" },
            { sublabel: "Marks", link: "/marks" },
            { sublabel: "Grades", link: "/grades" },
            { sublabel: "Extra", link: "/extra" },
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
    
]
export default SidebarData;