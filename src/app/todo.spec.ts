import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should default to empty/false properties', () => {
    const singleTodo = new Todo();

    expect(singleTodo.id).toBe(undefined);
    expect(singleTodo.title).toEqual('');
    expect(singleTodo.complete).toBeFalsy();
  });

  it('should set its properties from the given object', () => {
    const aThing = {
      id: 9,
      title: 'Something Important',
      complete: true
    };
    const singleTodo = new Todo(aThing);

    expect(singleTodo.id).toEqual(aThing.id);
    expect(singleTodo.title).toEqual(aThing.title);
    expect(singleTodo.complete).toEqual(aThing.complete);
  });
});
