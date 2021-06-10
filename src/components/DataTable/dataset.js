let data = [
    {
        moduleName: "Configuration",
        activityName: "Item Category",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Configuration",
        activityName: "Item",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Configuration",
        activityName: "Party",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Configuration",
        activityName: "Profile",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Configuration",
        activityName: "Bank Account",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Configuration",
        activityName: "Change Password",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Purchase",
        activityName: "Purchase",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Purchase",
        activityName: "Due Payment",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Sales",
        activityName: "Sales",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Sales",
        activityName: "Due Receive",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
    {
        moduleName: "Accounts",
        activityName: "Voucher",
        isCreate: false,
        isView: false,
        isEdit: false,
        isDelete: false,
        isApprove: false,
    },
];

const updateDataset = (activityName, name, isChecked) => {
    data = data.map((module) =>
        module.activityName === activityName ? { ...module, [name]: isChecked } : module
    );
    return data;
};

export default { data, updateDataset };
