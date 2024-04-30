#! /usr/bin/env node
import inquirer from 'inquirer';
import promptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = promptSync()

console.log(chalk.red.bold.underline(' =======>>>> ') + chalk.bgBlack.bold.underline('Welcome to the To Do List App') +chalk.red.bold.underline(' <<<<======='));
console.log(chalk.red.bold.underline('\t====>>> ') + chalk.bgBlack.bold.underline('Created By Shoaib Siddiq') +chalk.red.bold.underline(' <<<====\n'));
let myList: string[] = [];
while(true){

const answer = await inquirer.prompt(
    [
        {
            name: 'query',
            message: '\nWhat do you want to do in your To Do List?',
            type: 'list',
            choices: ['View Your To Do List', 'Add Items in Your To Do List', 'Delete Items from the List', 'Quit']
        }
    ]
);
if(answer.query === 'View Your To Do List'){
    console.log(chalk.yellowBright.bold(' =======>>>> ') + chalk.whiteBright.bold('Your List is Here') +chalk.yellowBright.bold(' <<<<=======\n'));
    for(let items of myList){
        console.log(myList.indexOf(items)+ ':' + items);
    }
    
        if(myList[0] === undefined){
        console.log(chalk.yellowBright.bold(' =======>>>> ') + chalk.whiteBright.bold('Your List is Empty Please Add Your Items in Your List.') +chalk.yellowBright.bold(' <<<<=======\n'));        }
        console.log(chalk.yellowBright.bold('\n xxxx====xxxx====xxxx====xxxx====xxxx '));
    
} else if(answer.query === 'Add Items in Your To Do List'){
    let input = prompt('Enter your To Do items here:');
    myList.push(input);
    console.log(chalk.yellowBright.bold(' =======>>>> ') + chalk.whiteBright.bold('Added Your Items') +chalk.yellowBright.bold(' <<<<=======\n'));
    console.log(`${input}, is added in your list.`)

} else if(answer.query === 'Delete Items from the List'){
    console.log('Here is your List: ');
    for(let items of myList){
        console.log(myList.indexOf(items) + ':' + items)
    };
    let deleteItems = Number (prompt(chalk.whiteBright.bold('Enter your index number that you want to delete from the list.')));
    let userConfirm = await inquirer.prompt(
        [
            {
                name: 'deleteConfirm',
                message: `Are you sure you want to delete ${deleteItems}?`,
                type: 'list',
                choices: ['Yes', 'No']
            }
        ]
    );
    if(userConfirm.deleteConfirm === 'Yes'){
    myList.splice(deleteItems , 1);

    console.log(chalk.whiteBright.bold(`${deleteItems}: deleted from your list.\n`));
    console.log(chalk.yellowBright.bold(' =======>>>> ') + chalk.whiteBright.bold('Here is your Remaining List') +chalk.yellowBright.bold(' <<<<=======\n'));

    for(let items of myList){
        console.log(myList.indexOf(items) + ':' + items)
    }
    }if(userConfirm.deleteConfirm === 'No'){
        console.log('\nPlease select an option that you want to delete from the list.');
    };
}else{
    console.log(chalk.red.bold.underline(' =======>>>> ') + chalk.blue.bold.underline('Thank You for using the App Good Bye') +chalk.red.bold.underline(' <<<<=======\n'))
    break;
}
}