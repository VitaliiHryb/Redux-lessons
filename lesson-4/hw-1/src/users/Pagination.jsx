// опишите компоненту, которая принимает от UsersList в свойствах
// goPrev - ф-ция для переключения на предыдущую страницу,
// goNext - ф-ция для переключения на сдед. страницу,
// currentPage - текущая страница, totalItems - всего элементов в списке,
// itemsPerPage - к-во элеиентов на странице.
// Pagination отображает две кнопки и текущую страницу

// Pagination должна оставаться презентационной компонентой (не подключатся к store)
// На странице должно отображаться три записи
// Если отображена первая страница, то кнопка назад (предыдущая страница) должна быть disabled и стрелочка внутри кнопки должна быть спрятана
// Если отображена последняя страница, то кнопка вперед (след. страница) должна быть disabled и стрелочка внутри кнопки должна быть спрятана

// Подсказка
// В Pagination перед return на основе тех свойств, которые принимает компонента создайте 2 переменные:
// isPrevPageAvailable и isNextPageAvailable.
// Эти две переменные используйте в JSX, чтобы показать / скрыть стрелочки и задисейблить / расдисейблить кнопки.

import React from 'react';

function Pagination(props) {
  const { goPrev, goNext, currentPage, totalItems, itemsPerPage } = props;
  const pageNumber = currentPage + 1;
  const isFirstPage = pageNumber < 2;
  const isLastPage = pageNumber * itemsPerPage >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}

export default Pagination;
