export const basic = `
<template>
  <ik-comment>
    <template slot="actions">
      <span>
        <ik-tooltip title="Like">
          <ik-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </ik-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{likes}}
        </span>
      </span>
      <span>
        <ik-tooltip title="Dislike">
          <ik-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </ik-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{dislikes}}
        </span>
      </span>
      <span>Reply to</span>
    </template>
    <a slot="author">Han Solo</a>
    <ik-avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
      slot="avatar"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure), to help people create their product prototypes beautifully and
      efficiently.
    </p>
    <ik-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
      <span>{{moment().fromNow()}}</span>
    </ik-tooltip>
  </ik-comment>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        likes: 0,
        dislikes: 0,
        action: null,
        moment,
      };
    },
    methods: {
      like() {
        this.likes = 1;
        this.dislikes = 0;
        this.action = 'liked';
      },
      dislike() {
        this.likes = 0;
        this.dislikes = 1;
        this.action = 'disliked';
      },
    },
  };
</script>
`

export const list = `
<template>
  <ik-list
    class="comment-list"
    :header="\`$\{data.length} replies\`"
    itemLayout="horizontal"
    :dataSource="data"
  >
    <ik-list-item slot="renderItem" slot-scope="item, index">
      <ik-comment :author="item.author" :avatar="item.avatar">
        <template slot="actions">
          <span v-for="action in item.actions">{{action}}</span>
        </template>
        <p slot="content">{{item.content}}</p>
        <ik-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
          <span>{{item.datetime.fromNow()}}</span>
        </ik-tooltip>
      </ik-comment>
    </ik-list-item>
  </ik-list>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        data: [
          {
            actions: ['Reply to'],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: moment().subtract(1, 'days'),
          },
          {
            actions: ['Reply to'],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: moment().subtract(2, 'days'),
          },
        ],
        moment,
      };
    },
  };
</script>
`

export const nested = `
<template>
  <ik-comment>
    <span slot="actions">Reply to</span>
    <a slot="author">Han Solo</a>
    <ik-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure).
    </p>
    <ik-comment>
      <span slot="actions">Reply to</span>
      <a slot="author">Han Solo</a>
      <ik-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
      <ik-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <ik-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </ik-comment>
      <ik-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <ik-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </ik-comment>
    </ik-comment>
  </ik-comment>
</template>
`

export const reply = `
<template>
  <div>
    <ik-list
      v-if="comments.length"
      :dataSource="comments"
      :header="\`$\{comments.length} $\{comments.length > 1 ? 'replies' : 'reply'}\`"
      itemLayout="horizontal"
    >
      <ik-list-item slot="renderItem" slot-scope="item, index">
        <ik-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        >
        </ik-comment>
      </ik-list-item>
    </ik-list>
    <ik-comment>
      <ik-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <ik-form-item>
          <ik-textarea :rows="4" @change="handleChange" :value="value"></ik-textarea>
        </ik-form-item>
        <ik-form-item>
          <ik-button htmlType="submit" :loading="submitting" @click="handleSubmit" type="primary">
            Add Comment
          </ik-button>
        </ik-form-item>
      </div>
    </ik-comment>
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        comments: [],
        submitting: false,
        value: '',
        moment,
      };
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: this.value,
              datetime: moment().fromNow(),
            },
            ...this.comments,
          ];
          this.value = '';
        }, 1000);
      },
      handleChange(e) {
        this.value = e.target.value;
      },
    },
  };
</script>
`
