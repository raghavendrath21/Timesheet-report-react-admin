export default {
  items: [
    {
      name:
        "Dashboard",
      url:
        "/",
      icon:
        "icon-speedometer",
      badge: {
        variant:
          "info"
      }
    },
    {
      title: true,
      name:
        "Time",
      wrapper: {
        // optional wrapper object
        element:
          "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class:
        "" // optional class names space delimited list for title item ex: "text-center"
    },

    {
      name:
        "Add Users",
      url:
        "/base",
      icon:
        "icon-puzzle",
      children: [
        {
          name:
            "Breadcrumbs",
          url:
            "/base/breadcrumbs",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Cards",
          url:
            "/base/cards",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Carousels",
          url:
            "/base/carousels",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Collapses",
          url:
            "/base/collapses",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Dropdowns",
          url:
            "/base/dropdowns",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Forms",
          url:
            "/base/forms",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Jumbotrons",
          url:
            "/base/jumbotrons",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "List groups",
          url:
            "/base/list-groups",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Navs",
          url:
            "/base/navs",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Paginations",
          url:
            "/base/paginations",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Popovers",
          url:
            "/base/popovers",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Progress Bar",
          url:
            "/base/progress-bar",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Switches",
          url:
            "/base/switches",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Tables",
          url:
            "/base/tables",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Tabs",
          url:
            "/base/tabs",
          icon:
            "icon-puzzle"
        },
        {
          name:
            "Tooltips",
          url:
            "/base/tooltips",
          icon:
            "icon-puzzle"
        }
      ]
    },
    {
      name:
        "Add User Roles",
      url:
        "/buttons",
      icon:
        "icon-cursor",
      children: [
        {
          name:
            "Buttons",
          url:
            "/buttons/buttons",
          icon:
            "icon-cursor"
        },
        {
          name:
            "Button dropdowns",
          url:
            "/buttons/button-dropdowns",
          icon:
            "icon-cursor"
        },
        {
          name:
            "Button groups",
          url:
            "/buttons/button-groups",
          icon:
            "icon-cursor"
        },
        {
          name:
            "Brand Buttons",
          url:
            "/buttons/brand-buttons",
          icon:
            "icon-cursor"
        }
      ]
    },
    {
      name:
        "Add Clients",
      url:
        "/charts",
      icon:
        "icon-pie-chart"
    },
    {
      name:
        "Add Projects",
      url:
        "/icons",
      icon:
        "icon-star",
      children: [
        {
          name:
            "CoreUI Icons",
          url:
            "/icons/coreui-icons",
          icon:
            "icon-star",
          badge: {
            variant:
              "info",
            text:
              "NEW"
          }
        },
        {
          name:
            "Flags",
          url:
            "/icons/flags",
          icon:
            "icon-star"
        },
        {
          name:
            "Font Awesome",
          url:
            "/icons/font-awesome",
          icon:
            "icon-star",
          badge: {
            variant:
              "secondary",
            text:
              "4.7"
          }
        },
        {
          name:
            "Simple Line Icons",
          url:
            "/icons/simple-line-icons",
          icon:
            "icon-star"
        }
      ]
    },
    {
      name:
        "Assign Users",
      url:
        "/notifications",
      icon:
        "icon-bell",
      children: [
        {
          name:
            "Alerts",
          url:
            "/notifications/alerts",
          icon:
            "icon-bell"
        },
        {
          name:
            "Badges",
          url:
            "/notifications/badges",
          icon:
            "icon-bell"
        },
        {
          name:
            "Modals",
          url:
            "/notifications/modals",
          icon:
            "icon-bell"
        }
      ]
    },
    {
      name:
        "Create Tasks",
      url:
        "/",
      icon:
        "icon-calculator",
      badge: {
        variant:
          "info"
      }
    },
    {
      name:
        "User Add Time ",
      url:
        "/",
      icon:
        "icon-calculator",
      badge: {
        variant:
          "info"
      }
    },
    {
      name:
        "Generate Timesheet",
      url:
        "/widgets",
      icon:
        "icon-calculator",
      badge: {
        variant:
          "info"
      }
    },
    {
      divider: true
    }
  ]
};
