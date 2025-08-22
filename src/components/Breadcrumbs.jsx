import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/components/Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  if (location.pathname === "/") {
    return null;
  }

  const breadcrumbs = [
    {
      name: t("home"),
      path: "/",
    },
    ...pathSegments.map((segment, idx) => {
      const path = "/" + pathSegments.slice(0, idx + 1).join("/");
      return {
        name: t(segment) !== segment ? t(segment) : segment.charAt(0).toUpperCase() + segment.slice(1),
        path,
      };
    }),
  ];

  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <li key={crumb.path} className={styles.breadcrumbItem}>
              {idx !== 0 && (
                <span className={styles.separator}>/</span>
              )}
              {!isLast ? (
                <Link to={crumb.path} className={styles.link}>
                  {crumb.name}
                </Link>
              ) : (
                <span className={styles.currentPage}>{crumb.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
