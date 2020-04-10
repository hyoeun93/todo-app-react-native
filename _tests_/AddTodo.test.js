import React from 'react';
import renderer from 'react-test-renderer';
import AddTodo from '../src/components/AddTodoButton';

it('TodoItem snapShot', () => {
    const snap = renderer.create(
        <AddTodo />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})