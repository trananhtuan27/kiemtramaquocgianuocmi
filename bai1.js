function is_usZipCode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}
is_usZipCode("dghzfzdh");
