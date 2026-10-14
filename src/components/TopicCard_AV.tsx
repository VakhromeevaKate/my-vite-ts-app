import { type Topic } from '../api/topics';

type TopicCardProps = Topic

export function TopicCard_AV(topic: TopicCardProps) {
    return (
        <div className='userCard'>
            <div>#{topic.id}</div>
            <div>{topic.title}</div>
        </div>
    );
}
