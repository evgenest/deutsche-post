import { Fragment } from 'react'

export default function IsIncoming() {
  return (
    <Fragment>
      <input type="hidden" name="isIncoming" value="no" />
      <input
        type="checkbox"
        id="isIncoming"
        name="isIncoming"
        value="yes"
        defaultChecked
      />
      <label className="pl-2" id="isIncoming" htmlFor="isIncoming">
        Is incoming?
      </label>
    </Fragment>
  )
}
