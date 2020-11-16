import React from "react"
import { Button, useAccordionToggle } from "react-bootstrap"

export function ContextAwareToggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )
  return (
    <div
      //   variant="link"
      type="button"
      className="d-flex justify-content-between mt-5"
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  )
}
