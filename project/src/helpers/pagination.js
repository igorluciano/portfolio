export function paginate(items, itemsPerPage) {
  const pageSize = Math.ceil(items.length / itemsPerPage);
  return Array.from({ length: pageSize }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
}
