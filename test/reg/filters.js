import {assert} from 'chai';

describe('Filters', function () {

    describe('Filters are not applied by default', function () {

        it('Login is successful', function () {
            browser.url('/');
            $('#email').setValue('kharkova17@gmail.com');
            $('#pass').setValue('07111990Днфтф');
            $('#login').click();
            $('#logout').waitForDisplayed(2000);
            let logoutButton = $('#logout').isDisplayed();
            assert.equal(logoutButton, true);
        });
    });

    describe('Open filter', function () {

        it('Open bugs displayed', function () {
            $('#not_closed').click();
         // $('.badge-warning').waitForDisplayed(2000);
            let closedStatus = $('.badge-dark').isDisplayed();
            let wontfixStatus = $('.badge-secondary').isDisplayed();
            assert.equal(closedStatus, false);
            assert.equal(wontfixStatus, false);
        });

        it('Assign to me', function () {
            let user = 'Irina Kharkova';
            $('#all_issues').click();
            $('#to_me').click();
            let assignee = $('/*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/td[3]').isDisplayed();
            assert.equal(assignee, user);
        });

        it('Closed bug', function () {
            $('#all_issues').click();
            $('#to_me').click();
            let assignee = $('/*[@id="root"]/div/div[2]/div/div[2]/table/tbody/tr[1]/td[3]').isDisplayed();
            assert.equal(assignee, user);
        });
    });
});