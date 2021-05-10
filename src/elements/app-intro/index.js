import { define, WeElement } from 'omi'
import style from './_index.css'
import "@omiu/switch"

define('app-intro', class extends WeElement {
  css() {
    return (
      style +
      `
    code{
      color: ${Math.random() > 0.5 ? 'red' : 'blue'}
    }
    .testHoge{
      color: "red"
    }
    `
    )
  }
  
  counter =0
  testChange=(evt)=>{
    this.counter++
    this.update();
  }

  static propTypes = {
    arr: Array
  }

  render(props) {
    return <>
      <p class="app-intro">
        スタートするためには<code>src/elements/*/*.*</code>を変更する必要があります。
        <div>{props.arr.join('-')}</div>
      </p>
      <p>
        どうやらCSSにもコードを埋め込めるらしい。例えば<div class="testHoge">これはtestHogeClass</div>です。
      </p>
      スイッチを切り替えた回数も容易に管理できます。変更回数：{this.counter}<o-switch id="switchA" onChange={this.testChange}></o-switch>
    </>
  }
})
