# Ledger

This just a fun weekend hack I wanted to do in bash. The goal of the tool is to keep track of monthly payments by any category you want, the ledger.

## How to use

Rather simple command line too that supports two modes.

1. Inserting a new record into the ledger.
1. Outputting a ledger so you can print it.

### Creating a new record

Run the following command at your terminal: `./ledger --ledger LEDGER_NAME --track` (or `./ledger -l LEDGER_NAME -t` for shorthand)

1. Replace `LEDGER_NAME` with the name of your ledger.
1. Follow the onscreen prompts.
1. If this is the first time running for this ledger, you'll be asked for a title & subtitle for this ledger.
1. You'll be asked a series of questions to insert the correct information.

## Viewing a ledger

Run the following command at your terminal: `./ledger --build --open` (or `./ledger -b -o` for shorthand)

