import render from './custom/previewRender'
import checkRules from './custom/rule';

const layouts = {
  colItem(h, element,value) {
    let labelWidth = element.labelWidth ? `${element.labelWidth}px` : null
    const {onValChange} = this.$attrs;
    const rules = checkRules(element);
    return (
        <el-col  style="padding-left: 7.5px; padding-right: 7.5px;">
          <el-form-item label={element.showLabel ? element.label : ''}
                        label-width={labelWidth}
                        prop={element.id}
                        rules={rules}
                        >
            <render key={element.id} conf={element} value={value} onInput={ event => {
              //this.$set(element,'value',event);
              onValChange(element.id,event);
            }}/>
          </el-form-item>
        </el-col>
    )
  }
}

export default {
  name:"previewItem",
  components: {
    render
  },
  props: ['model','value'],
  data(){
    return {
      eleConfig:this.model
    }
  },
  render(h) {
    return layouts.colItem.call(this, h, this.eleConfig,this.value)
  }
}