<template>
<div>
    <div>
    <Rate v-model="value3" character="A" />
    <Rate v-model="value4" character="好" />
    <Rate v-model="value5" icon="ios-heart" />
    </div>
    <br>
    <div>
        <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
    </div>
    <div>
          <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <ColorPicker v-model="color3" alpha/>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                value3: 3,
                value4: 3,
                value5: 3,
                 color3: 'rgba(25, 190,107, .5)'
            }
        }
    }
</script>
