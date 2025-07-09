import { Metadata } from 'next'
import { PageContent } from './PageContent'

export type UserData = {
  id: string
  username: string
  firstname: string
  lastname: string
  email: string
  avatar: string
  role: string
  join_date: string
  description: string
}

const stub: UserData[] = [
  {
    id: '980b82bf-d1af-4e66-ab93-004da059b275',
    username: 'nberwick0',
    firstname: 'Norton',
    lastname: 'Berwick',
    email: 'nberwick0@liveinternet.ru',
    avatar: 'https://robohash.org/illumvitaeea.png?size=50x50&set=set1',
    role: 'Subcontractor',
    join_date: '5/4/2023',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  },
  {
    id: '4348814a-4ab9-4302-b1a0-93b6910080e0',
    username: 'rgatfield1',
    firstname: 'Rouvin',
    lastname: 'Gatfield',
    email: 'rgatfield1@state.gov',
    avatar: 'https://robohash.org/utcorruptiducimus.png?size=50x50&set=set1',
    role: 'Engineer',
    join_date: '2/28/2024',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  },
  {
    id: 'b79011a4-3bd9-4a48-bdea-8b2ee14ce7dd',
    username: 'bhancke2',
    firstname: 'Bari',
    lastname: 'Hancke',
    email: 'bhancke2@bloglovin.com',
    avatar: 'https://robohash.org/nesciuntquaetotam.png?size=50x50&set=set1',
    role: 'Engineer',
    join_date: '4/16/2024',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
  },
  {
    id: '215ea5fc-3acf-47f0-802c-39fd72b0aa15',
    username: 'sgolagley3',
    firstname: 'Sergeant',
    lastname: 'Golagley',
    email: 'sgolagley3@multiply.com',
    avatar: 'https://robohash.org/repellatsuntnesciunt.png?size=50x50&set=set1',
    role: 'Electrician',
    join_date: '4/1/2024',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
  },
  {
    id: '8de05533-6cd3-42fb-a4bc-e8817400bd09',
    username: 'cdakers4',
    firstname: 'Cherish',
    lastname: 'Dakers',
    email: 'cdakers4@joomla.org',
    avatar:
      'https://robohash.org/repellatconsequunturea.png?size=50x50&set=set1',
    role: 'Surveyor',
    join_date: '8/13/2023',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  },
  {
    id: 'ae3db8b5-cff4-468a-b98e-ba0440c00ca0',
    username: 'awestwater5',
    firstname: 'Alyda',
    lastname: 'Westwater',
    email: 'awestwater5@cdc.gov',
    avatar: 'https://robohash.org/nequealiquamnon.png?size=50x50&set=set1',
    role: 'Surveyor',
    join_date: '5/21/2023',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
  },
  {
    id: '3f3dc783-70db-44ed-8e26-8512fe8f94e9',
    username: 'dwaghorne6',
    firstname: 'Diarmid',
    lastname: 'Waghorne',
    email: 'dwaghorne6@dyndns.org',
    avatar: 'https://robohash.org/etconsequuntursed.png?size=50x50&set=set1',
    role: 'Architect',
    join_date: '8/21/2023',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
  },
  {
    id: 'dc459fa2-90d8-4ee4-86d9-4914f4f2c7ca',
    username: 'hplenderleith7',
    firstname: 'Honoria',
    lastname: 'Plenderleith',
    email: 'hplenderleith7@uiuc.edu',
    avatar:
      'https://robohash.org/beataerecusandaeomnis.png?size=50x50&set=set1',
    role: 'Engineer',
    join_date: '8/12/2023',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
  },
  {
    id: '35156833-c179-4dc7-81e3-0091b5e184c9',
    username: 'iomara8',
    firstname: 'Ivett',
    lastname: "O'Mara",
    email: 'iomara8@technorati.com',
    avatar: 'https://robohash.org/earumenimquam.png?size=50x50&set=set1',
    role: 'Engineer',
    join_date: '10/8/2023',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  },
]

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'A simple user directory application built with Next.js',
}

export default function Home() {
  return <PageContent data={stub} dataLength={stub.length} />
}
