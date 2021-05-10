import { define, WeElement } from 'omi'
import style from './_index.css'
import "@omiu/switch"
import task from '../task'

define('task-list', class extends WeElement {


  render() {
    return <>
      <task-element />
    </>
  }
})
