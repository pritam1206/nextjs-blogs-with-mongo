import React from 'react'
import MainNavigation from './main-navigation'

export default function Layout(props) {
  return (
    <React.Fragment>
      <MainNavigation />
      {props.children}
    </React.Fragment>
  )
}
