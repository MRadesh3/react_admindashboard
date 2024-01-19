export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "Customer",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email Id", width: 150 },
  { field: "mobile", headerName: "Mobile", width: 150 },
  { field: "age", headerName: "Age", width: 50 },
  {
    field: "status",
    headerName: "Membership",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  { field: "location", headerName: "Location", width: 100 },
];

export const userRows = [
  {
    id: 1,
    username: "Aditi Sharma",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditisharma@gmail.com",
    mobile: 8080120538,
    age: 23,
    location: "Wagholi",
  },
  {
    id: 2,
    username: "Anurag Sharma",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "passive",
    email: "anurag@gmail.com",
    mobile: 8056120538,
    age: 21,
    location: "Sikhrapur",
  },
  {
    id: 3,
    username: "Mahesh Patil",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "pending",
    email: "pmahesh@gmail.com",
    mobile: 9767846758,
    age: 23,
    location: "Lonikand",
  },
  {
    id: 4,
    username: "Rajesh Dalvi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "dalvirajesh@gmail.com",
    age: 26,
    location: "Lonikand",
    mobile: 9667486798,
  },
  {
    id: 5,
    username: "Aditya Rathi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditya@gmail.com",
    age: 23,
    location: "Shivaji Nagar",
    mobile: 9787987656,
  },
  {
    id: 6,
    username: "Payal Mishal",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "payalm@gmail.com",
    age: 19,
    location: "Washim",
    mobile: 7517449686,
  },
  {
    id: 7,
    username: "Lokesh Kohli",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "lokeshk@gmail.com",
    age: 27,
    location: "Nagpur",
    mobile: 9524675678,
  },
  {
    id: 8,
    username: "Manoj Raghuwanshi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditi@gmail.com",
    age: 25,
    location: "Lucknow",
    mobile: 9678765678,
  },
  {
    id: 9,
    username: "aditi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "manoj@gmail.com",
    age: 23,
    location: "Lonikand",
    mobile: 8080120538,
  },
  {
    id: 10,
    username: "aditi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditi@gmail.com",
    age: 23,
    location: "Lonikand",
    mobile: 8080120538,
  },
  {
    id: 11,
    username: "aditi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditi@gmail.com",
    age: 23,
    location: "Lonikand",
    mobile: 8080120538,
  },
  {
    id: 12,
    username: "aditi",
    img: "https://c8.alamy.com/zooms/9/c312e4e055ab4242a798b19f5b4a249b/r5jgdy.jpg",
    status: "active",
    email: "aditi@gmail.com",
    age: 23,
    location: "Lonikand",
    mobile: 8080120538,
  },
];
