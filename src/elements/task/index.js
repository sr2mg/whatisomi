import { define, WeElement } from 'omi'
import style from './_index.css'
import "@omiu/switch"

define('task-element', class extends WeElement {

  static propTypes = {
    task: String
  }
  render(props) {
    return <>
      <p>{props.task}</p>
    </>
  }
})
