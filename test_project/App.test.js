describe('Simple App testing', function() {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  it('Invalid Login Test', async function() {
    const username = await $('~username'); 
    const password = await $('~password');
    const login = await $('~login');
    const loginstatus = await $('~loginstatus');
    await username.setValue('nam');
    await password.setValue('12345');
    
    const visibleUsername = await username.isDisplayed();
    const visiblePassword = await password.isDisplayed();

    expect(visibleUsername).toBeTruthy();  
    expect(visiblePassword).toBeTruthy();  

    expect(await username.getText()).toEqual('nam'); 
    expect(await password.getText()).toEqual('12345');

    await login.click();
    await loginstatus.waitForDisplayed(11000);

    // expect(await loginstatus.getText()).to.equal('fail');
  });

  it('Valid Login Test', async function() {
    const username = await $('~username'); 
    const password = await $('~password');
    const login = await $('~login');
    const loginstatus = await $('~loginstatus');
    await username.setValue('nam');
    await password.setValue('123456');
    
    const visibleUsername = await username.isDisplayed();
    const visiblePassword = await password.isDisplayed();

    expect(visibleUsername).toBeTruthy();  
    expect(visiblePassword).toBeTruthy();  

    expect(await username.getText()).toEqual('nam'); 
    expect(await password.getText()).toEqual('123456');

    await login.click();
    await loginstatus.waitForDisplayed(11000);

    // expect(await loginstatus.getText()).to.equal('success');
  });
});