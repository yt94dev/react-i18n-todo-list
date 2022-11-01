import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Constants/routes";
import { useTranslation } from "react-i18next";

import styles from "./Layout.module.css";
import logo from "../../Assets/logo.svg";
import bell from "../../Assets/bell.svg";

function Layout() {
    const { t } = useTranslation();

    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.menu}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                        to={ROUTES.dashboard}
                    >
                        {t("menu.dashboard")}
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : ""
                        }
                        to={ROUTES.create}
                    >
                        {t("menu.create")}
                    </NavLink>
                </div>
                <div className={styles.notifications}>
                    <img src={bell} alt="" />
                </div>
            </nav>
        </>
    );
}

export default Layout;
