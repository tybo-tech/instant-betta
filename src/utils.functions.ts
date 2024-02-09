export function toggleNav() {
  const item = document.getElementById('side-nav');
  if (item) {
    item.classList.toggle('visible');
  }
}
export function filterForms(items: { label: string }[]) {
  const excludes = [
    'Updated at',
    'Course id',
    'id',
    'Created at',
    'Created by',
  ];
  return items.filter(
    (x) =>
      !excludes.find(
        (e) => e.toLowerCase().trim() === x.label.toLowerCase().trim()
      )
  );
}
