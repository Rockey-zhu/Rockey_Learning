<template>
  <div class="c">
    <div>
      <Input
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px"
      />
      <button @click="handadd">点击加一</button>
      <button @click="handreduce">点击减一</button>
    </div>
    <div>
        <span>{{number}}</span>
        <button @click="sum">各项相加</button>
    </div>
    <hr>
    <div>
      <h1>点击次数：{{count}}</h1>
      <button type="button" @click="count++">点击</button>
    </div>
    <br><br>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider>With Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider dashed />
    <div style="padding: 10px;background: #f8f8f9">
        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" />
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell>
            </CellGroup>
        </Card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "1",
      number:991,
      count:0,
      switchValue:true
    }
  },
  methods: {
    handadd() {
      this.value++;
    },
    handreduce() {
      this.value--;
    },
    sum(){
        let units=0,decade=0,hundreds=0
        units=parseInt(this.number%10);
        console.log("units-----",units)
      
        hundreds=parseInt(this.number/100);
         decade=parseInt((this.number-hundreds*100)/10);
         
        console.log("decade-----",units)
        console.log("hundreds",hundreds)
        this.number=units+decade+hundreds;
    }
  }
}

</script>

