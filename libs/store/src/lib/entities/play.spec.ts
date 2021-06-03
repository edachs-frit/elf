// import { createState } from '../core/state';
// import { entitiesUIRef, withEntities, withUIEntities } from './entity.state';
// import { createTodo, Todo } from '../mocks/stores.mock';
// import { Store } from '../core/store';
// import produce from 'immer';
// import { withProps } from '../props/props.state';
// import { addEntities } from './add.mutation';
// import { select } from '../core/queries';
// import { selectAll } from './all.query';
//
// import { updateEntities } from './update.mutation';
// import { stateFactory } from '../core/state-factory';
// import { StatusState } from '../core/types';
//
// type UIEntity = { id: number; open: boolean };
//
// export const { selectStatus, setStatus, withStatus } = stateFactory<{
//   status: StatusState;
// }>('status', 'pending');
//
// const { state, config } = createState(
//   withStatus(),
//   withEntities<Todo, Todo['id']>(),
//   withUIEntities<UIEntity, Todo['id']>(),
//   withProps<{ id: number; skills: { title: string }[] }>({ id: 1, skills: [] })
// );
//
// const store = new Store({ state, name: 'todos', config });
//
// function write<S>(updater: (state: S) => void): (state: S) => S {
//   return function (state: S) {
//     return produce(state, (draft) => {
//       updater(draft as S);
//     });
//   };
// }
//
// it('', function () {
//   store.pipe(select((state) => state.id)).subscribe(console.log);
//
//   store.reduce(
//     write((state) => {
//       state.id = 1;
//     })
//   );
// });
//
// it('sho', function () {
//   store.reduce(
//     write((state) => {
//       state.id = 3;
//     }),
//     addEntities(createTodo(1)),
//     addEntities({ open: true, id: 1 }, { ref: entitiesUIRef })
//   );
//
//   store
//     .combine([
//       store.pipe(selectAll()),
//       store.pipe(selectAll({ ref: entitiesUIRef })),
//     ])
//     .subscribe((v) => {
//       console.log(v);
//     });
//
//   store.pipe(select((state) => state.skills[0])).subscribe((v) => {
//     console.log('0', v?.title);
//   });
//
//   store.pipe(select((state) => state.skills[1])).subscribe((v) => {
//     console.log('1', v?.title);
//   });
//
//   store.reduce(
//     write((state) => {
//       state.skills.push({ title: 'foo' });
//       state.skills.push({ title: 'bar' });
//     }),
//     addEntities(createTodo(2)),
//     addEntities({ open: true, id: 2 }, { ref: entitiesUIRef }),
//     updateEntities(
//       1,
//       write<Todo>((entity) => {
//         entity.title = 'd';
//       })
//     )
//   );
//
//   console.log(store.getValue());
// });


it('should', function() {
    expect(true).toBeTruthy();
  });
