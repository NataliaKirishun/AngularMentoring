import { OrderByPipe } from './order-by.pipe';
import { ICourseListItem } from '../../../course/models/course-list-item';

describe('OrderByPipe', () => {
  const oderByPipe = new OrderByPipe();

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
    expect(oderByPipe).toBeTruthy();
  });

  it('the length of ordered list should be equal 3', () => {
    const oderedList = oderByPipe.transform(courseListTest, 'date');
    expect(oderedList.length).toBe(3);
  });

  it('first item in the ordered list should be item with id \'9adged87\'', () => {
    const oderedList = oderByPipe.transform(courseListTest, 'date');
    expect(oderedList[0].id).toBe('9adged87');
  });
});
