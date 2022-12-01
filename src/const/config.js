const config = {
    email: "tamhouse@gmail.com",
    name: "Nội thất Tâm House",
    address: "36 Nguyễn Tri Phương - TP. Đà Nẵng",
    phone: "0906.326.658",
    facebook: "https://www.facebook.com/tamhouse/",
    youtube: "www.youtube.com/tamhouse",
    year: 2022,
    zalo: "",
}
if(config.zalo === ""){
    config.zalo = config.phone;
}
export default config

