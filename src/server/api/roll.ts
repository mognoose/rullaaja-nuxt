import { defineEventHandler } from 'h3';

export default defineEventHandler(event => {
    const query = getQuery(event);
    
    const dice = query.dice || 20;
    return {dice: dice, result: Math.floor(Math.random() * dice) + 1};

});