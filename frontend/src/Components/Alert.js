import React from 'react'

export default function Alert(props) {
  return (
    <div style={{ height: '10px' }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
            role="alert"
          >
            <strong>
              {props.alert.type === 'danger' ? 'Error' : props.alert.type}
            </strong>
            : {props.alert.message}
          </div>
        </div>
      )}
    </div>
  )
}
