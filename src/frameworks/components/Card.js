import React from "react";

import "./Card.scss";

const Card = ({
  variant = "filled",
  interactive = false,
  icon = null,
  header = null,
  action = null,
  status = "",
  image = null,
  body = null,
  footer = null,
  className = "",
}) => {
  let class_name = "card card-" + variant;
  if (className) class_name = class_name + " " + className;
  if (interactive) class_name = class_name + " interactive";
  return (
    <div className={class_name}>
      {(icon || header || action) && (
        <div className="card__top">
          {icon && <div className="card__top__icon">{icon}</div>}
          <div className="card__top__header">{header}</div>
          {action && (
            <div
              className={
                status
                  ? "card__top__action card__top__status-" + status
                  : "card__top__action"
              }
            >
              {action}
            </div>
          )}
        </div>
      )}
      {image && <div className="card__image">{image}</div>}
      {body && <div className="card__body">{body}</div>}
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
