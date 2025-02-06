<template>
    <Table border :columns="columns" :data="data"></Table>
</template>
<script>

    export default {
        data () {
            return {
                columns: [
                    {
                        title: 'Date',
                        key: 'date',
                         filters:[
                            {
                                label:'2000年之前',
                                value: 1,
                            },
                            {
                                label:'2000年之后',
                                value: 2,
                            },
                        ],
                        filterMultiple:false,
                        filterMethod(value,row){
                            if(value === 1){
                                return row.date < 2000;
                            }else if(value === 2){
                                return row.date > 2000;
                            }
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        filters: [
                            {
                                label: '大于 25',
                                value: 1
                            },
                            {
                                label: '小于 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'Bei Jing',
                                value: 'Bei Jing'
                            },
                            {
                                label: 'Shang Hai',
                                value: 'Shang Hai'
                            },
                            {
                                label: 'Hu Bei',
                                value: 'Hu Bei'
                            },
                            {
                                label: 'New York',
                                value: 'New York'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'Bei Jing',
                        date: 1997
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Shang Hai',
                        date: 1990
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Hu Bei',
                        date: 2002
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'New York',
                        date: 2018
                    }
                ],
            }
        }
    }
</script>