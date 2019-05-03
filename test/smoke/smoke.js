import { assert } from 'chai';

describe('Login', function () {

    it('Works', function () {
        browser.url('/');
        $('#email').setValue('testreacttest@gmail.com');
        $('#pass').setValue('testTest');
        $('#login').click();
        let newBug = $('#new_bug');
        newBug.waitForDisplayed(5000);
        assert.isTrue(newBug.isDisplayed());
    })

});