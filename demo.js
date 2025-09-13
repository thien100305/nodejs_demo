function showInfo(name, birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    console.log(`Họ và tên: ${name}`);
    console.log(`Năm sinh: ${birthYear}`);
    console.log(`Tuổi: ${age}`);
}

showInfo("Lê Thanh Thiên", 2005);
