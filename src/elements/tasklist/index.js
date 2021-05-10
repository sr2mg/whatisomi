import { define, WeElement } from 'omi'
import style from './_index.css'
import "@omiu/switch"
import task from '../task'

define('task-list', class extends WeElement {


  static propTypes={
    tasks:Array
  }
  render() {
    return <>
      {this.props.tasks.map(task=>
              <task-element task={task}/>
        )}

    </>
  }
})
