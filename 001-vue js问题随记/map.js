let arr = [{
    "ApprovalStatus": "",
    "key": "ApprovalStatus",
    "value": "",
    "label": "",
    "isSelected": false
}, {
    "ApprovalStatus": "Archived",
    "key": "ApprovalStatus",
    "value": "Archived",
    "label": "Archived",
    "isSelected": false
}, {
    "ApprovalStatus": "Completed",
    "key": "ApprovalStatus",
    "value": "Completed",
    "label": "Completed",
    "isSelected": false
}, {
    "ApprovalStatus": "Rejected",
    "key": "ApprovalStatus",
    "value": "Rejected",
    "label": "Rejected",
    "isSelected": false
}, {
    "ApprovalStatus": "Returned",
    "key": "ApprovalStatus",
    "value": "Returned",
    "label": "Returned",
    "isSelected": false
}]

//map 一个新的数组
//findIndex   //如果遍历的item.value 相同 则 返回-1 不相同返回1

let NewArr = arr.map((item, index) => {
    let _index = arr.findIndex(selectItem => selectItem == item.value)
    let _res = {
        key: item.label,
        value: item.value,
        label: item.label,
        isSelected: _index > 0 ? true : false
    }
    _res["NewArr"] = item.value
    return _res
})
console.log("NewArr", NewArr);

// NewArr [
//   { key: '', value: '', label: '', isSelected: false, NewArr: '' },
//   {
//     key: 'Archived',
//     value: 'Archived',
//     label: 'Archived',
//     isSelected: false,
//     NewArr: 'Archived'
//   },
//   {
//     key: 'Completed',
//     value: 'Completed',
//     label: 'Completed',
//     isSelected: false,
//     NewArr: 'Completed'
//   },
//   {
//     key: 'Rejected',
//     value: 'Rejected',
//     label: 'Rejected',
//     isSelected: false,
//     NewArr: 'Rejected'
//   },
//   {
//     key: 'Returned',
//     value: 'Returned',
//     label: 'Returned',
//     isSelected: false,
//     NewArr: 'Returned'
//   }
// ]