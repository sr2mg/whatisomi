import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'
import '@omiu/button'

define('my-app', class extends WeElement {
  static css = require('./_index.less')

  name = 'Omi'

  clickHandler = () => {

    this.name =(this.name == 'OMI') ? "Omi": "OMI"
    this.update()
  }

  render() {
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
        <o-button>ボタンらしい</o-button>
      </div>
    )
  }
})
