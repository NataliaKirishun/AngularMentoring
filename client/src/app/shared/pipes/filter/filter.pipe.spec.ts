import { FilterPipe } from './filter.pipe';
import { ICourseListItem } from '../../../modules/course/models/course-list-item';

describe('FilterPipe', () => {
  const filterPipe = new FilterPipe();

  const courseListTest: ICourseListItem[] = [
    {
      id: '9adged88',
      title: 'Video Course 1.',
      duration: 88,
      date: 'Tue Nov 05 2019 13:58:23 GMT',
      description: 'Text1',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Video Course 1.',
      duration: 88,
      date: 'Sun Nov 12 2019 13:58:23 GMT',
      description: 'Text2',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Video Course 3.',
      duration: 88,
      date: 'Jan 09 2018 13:58:23 GMT',
      description: 'Text3',
      topRated: false,
    }
  ];

  it('create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });

  it('filter CourseItemsList by value "1" in the field "title"', () => {
    const filtered = filterPipe.transform(courseListTest, '1', 'title');
    expect(filtered[0].id).toEqual(courseListTest[0].id);
  });

  it('length of filtered CourseItemsList by value "video" in the field "title" should be equal 3', () => {
    const filtered = filterPipe.transform(courseListTest, 'video', 'title');
    expect(filtered.length).toBe(3);
  });

});
