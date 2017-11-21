import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remote expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '22',
    description: 'Car',
    note: 'first car',
    amount: 450000,
    createdAt: moment(0).add(7, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const amount = 450;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 1,
    updates : {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should not edit and expense if expense not found.', () => {
  const note = 'this should not work';
  const action = {
    type: 'EDIT_EXPENSE',
    id: 909,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});