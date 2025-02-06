<template>
  <div>
    <Button type="primary" @click="handleClickAdd">新增{{}}</Button>
    <Table border :columns="columns" :data="tableRowDatas">
      <template #name="{ row }">
        <strong>{{ row.Name }}</strong>
      </template>
      <template #action="{ row, index }">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >详情</Button
        >
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <Modal
      v-model="addTable"
      title="新增数据"
      @on-ok="ok"
      @on-cancel="closeModel"
    >
      Name ：<Input
        v-model="newTableRowDatas.Name"
        placeholder="Enter something..."
        style="width: 300px"
      /><br />
      Age ：<Input
        v-model="newTableRowDatas.Age"
        placeholder="Enter something..."
        style="width: 300px"
      /><br />
      Address：<Input
        v-model="newTableRowDatas.Address"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addTable: false,

      columns: [
        {
          title: "Name",
          slot: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      tableRowDatas: [
        // {
        //   name: "John Brown",
        //   age: 18,
        //   address: "New York No. 1 Lake Park",
        // },
        // {
        //   name: "Jim Green",
        //   age: 24,
        //   address: "London No. 1 Lake Park",
        // },
        // {
        //   name: "Joe Black",
        //   age: 30,
        //   address: "Sydney No. 1 Lake Park",
        // },
        // {
        //   name: "Jon Snow",
        //   age: 26,
        //   address: "Ottawa No. 2 Lake Park",
        // },
      ],
      newTableRowDatas: {
        Name: "",
        Age: "",
        Address: "",
      },
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.tableRowDatas[index].Name}<br>Age：${this.tableRowDatas[index].Age}<br>Address：${this.tableRowDatas[index].Address}`,
      });
    },
    remove(index) {
      this.tableRowDatas.splice(index, 1);
    },
    handleClickAdd() {
      this.addTable = true;
    },
    ok() {
      console.log("data", this.newTableRowDatas);
      this.tableRowDatas.push(this.newTableRowDatas);
      this.tableRowDatas[index].name = this.newTableRowDatas.Name;
      console.log("tableRowDatas", this.tableRowDatas);
    },
    closeModel() {},
  },
};
</script>
