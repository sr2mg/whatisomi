import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'
import '../tasklist'
import '@omiu/button'
import '@omiu/input'

define('my-app', class extends WeElement {
  static css = require('./_index.less')

  name = 'Omi'
  task ="a"
  tasks =["Hello","hi","こんにちは"]
  clickHandler = () => {
    this.name =(this.name == 'OMI') ? "Omi": "OMI"
    this.update()
  }

  taskChange =(event)=>{
    this.task = event.detail
    }

  pushTask =()=>{
    this.tasks.push(this.task)
    this.update()
  }

  render() {
    const store = this.store
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">{this.name}へようこそ！</h1>
        </header>
        <app-intro arr={[1, 2, 3]} />
        <p><o-input placeholder="Enter Your Tasks" onChange={this.taskChange} id="input"></o-input></p>
        <p><o-button onClick={this.pushTask}>投稿する</o-button></p>
        <task-list tasks={this.tasks}/>
      </div>
    )
  }
})
