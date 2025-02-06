<template>
<div>
    <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
    </div>
    <div>
        <RadioGroup v-model="border"  button-style="solid">
            <Radio label="北京" border disabled></Radio>
            <Radio label="上海" border></Radio>
            <Radio label="深圳" border></Radio>
            <Radio label="杭州" border></Radio>
        </RadioGroup>
        <RadioGroup v-model="button8" type="button" button-style="solid" style="margin-top: 16px">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </RadioGroup>
    </div>
    <br>
    <Switch :before-change="handleBeforeChange" />
     <Switch true-color="#13ce66" false-color="#ff4949" />
     <div><Table border :columns="columns7" :data="data6"></Table></div>
     <br>
     <div>
          <Select v-model="model15" prefix="ios-home" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Select v-model="model15" style="width:200px">
        <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
     </div>
     <br>
     <div>
          <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
     </div>
     <div> <Slider v-model="value6" :step="10" show-stops></Slider>
    <Slider v-model="value7" :step="10" show-stops range></Slider></div>
    <div>
        <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
        <Row>
        <Col span="12">
            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
    </div>
    <div><Transfer
        :data="data2"
        :target-keys="targetKeys2"
        filterable
        :filter-method="filterMethod"
        @on-change="handleChange2"></Transfer>
</div>
<div>
     <InputNumber v-model="value8" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</div>
     </div>
</template>
<script>
    export default {
        data () {
            return {
                value2:'',
                data2:[],
                value6:30,
                value7:[20,50],
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys(),
                disabled:true,
                value8:1,

                columns7:[{
                    title:"Name",
                    key:'name',
                    render:(h,params)=>{
                        return h('div',[
                            h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                        ]);
                    }
                },
     {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                border:'上海',
                button8:'杭州',
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model15: ''
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleBeforeChange(){
                return new Promise((resolve)=>{
                    this.$Modal.confirm({
                        title:'切换确认',
                        content:'您确认要切换开关状态？',
                        onOk:()=>{
                            resolve();
                        }
                    })
                })
            },
             show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
              handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
               getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            }
        }
    }
</script>