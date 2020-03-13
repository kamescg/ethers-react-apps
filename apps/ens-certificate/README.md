# horizin Frontend

Activate your life.

### Major Dependencies

- 3Box.js
- Ethers.js
- 3Box UI State
- 3Box UI System
- 3Box Content Management System

### Routing

#### Standard

- Home (/)
- Feedback (/feedback)

#### Application

- AdventureList (/adventures)
- Adventure (/adventure/:id)
- QuestList (/quests)
- Quest (/quest/:id)
- CMS (/cms/\*)
  - Overview (/cms)
  - ContentList (/cms/content/\*)
    - ContentTypeList (/cms/content/:type)
    - ContentItem (/cms/content/item/:type/:id\*)
  - ContentTypeList (/cms/content-types)
  - ContentType (/cms/content-type/:id)
  - Settings (/cms/settings)

### Schemas

#### Registration

```json
object: 'user',
version: 0.0.1,
inputs: [
  'name',
  'email',
  'github',
],
```

#### Adventure

```json
object: 'adventure',
version: 0.0.1,
inputs: [
  'title',
  'subtitle',
  'summary',
  'content',
  'image',
  'images',
  'category',
  'tags',
  'reward',
],
```

#### Quest

```json
object: 'quest',
version: 0.0.1,
inputs: [
  'title',
  'subtitle',
  'summary',
  'content',
  'image',
  'images',
  'category',
  'tags',
  'reward',
],
```
