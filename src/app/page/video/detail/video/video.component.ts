import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../../../../service/video/video.service';
import {ActivatedRoute} from '@angular/router';
import VideoModule from '../../../../model/video';
import {log} from 'util';
import {ReplyService} from '../../../../service/reply/reply.service';
import ReplyModule from '../../../../model/reply';
import {__await} from 'tslib';
import {AuthService} from '../../../../service/auth.service';
import Liked from '../../../../model/liked';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

    private videoId: string;
    private login = false;
    private email;
    private reply: ReplyModule = new ReplyModule();
    private liked: Liked = new Liked();
    private likedCnt: number;

    constructor(private route: ActivatedRoute,
                private videoService: VideoService,
                private replyService: ReplyService,
                private authService: AuthService) {
        this.videoId = route.snapshot.paramMap.get('id');
        console.log(this.videoId);
    }

    @Input() video: VideoModule = new VideoModule();
    @Input() replyList: ReplyModule[];


    ngOnInit() {
        this.loginCheck();
    }
    getVideo(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.videoService.getVideo(id)
            .subscribe(video => {
                this.video = video;
                this.updateViews();
                this.getLiked(video._id);
                this.replyService.getReplyVideoId(video._id).subscribe(
                    (data: ReplyModule[]) => {
                        console.log('replyList => ', data);
                        this.replyList = data;
                        if (this.login) {
                            this.getMyLiked();
                        }
                    });
            });
    }
    loginCheck(): void {
        const loginData = this.authService.isUserLoggedIn();
        if (loginData.email) {
            this.login = true;
            this.reply.userId = loginData.email;
        }

        this.getVideo();
    }
    getMyLiked(): void {
        this.liked.videoId = this.video._id;
        this.liked.userId = this.reply.userId;
        console.log('getMyLiked start', this.liked);
        this.videoService.getMyLiked(JSON.stringify(this.liked))
            .subscribe(param => {
               log('getMyLiked' , param);
            });
    }
    getLiked(videoId): void {
        this.videoService.getVideoLiked(videoId)
            .subscribe(count => {
                console.log('count = ', count);
                this.likedCnt = count;
            });
    }
    updateViews(): void {
        log('updateViews views = ' + this.video.views);
        this.video.views ++;
        this.videoService.updateVideoViews(JSON.stringify(this.video))
            .subscribe(param => log(param));
    }
    updateLikes(): void {
        log('updateRecommends');
        if (!this.login) {
            alert('로그인 후 이용 가능합니다.');
        } else {
            this.videoService.updateVideoLiked(JSON.stringify(this.liked))
                .subscribe(param => log(param));
        }
    }
    addReply(): void {
        log('addReply');
        if (!this.login) {
            alert('로그인 후 이용 가능합니다.');
            return;
        } else {
            const email = this.reply.userId;
            this.reply.videoId = this.video._id;
            this.replyService.addReply(JSON.stringify(this.reply))
                .subscribe(
                    (data: ReplyModule[]) => {
                        console.log('add replyList => ', data);
                        this.replyList = data;
                        this.reply = new ReplyModule();
                        this.reply.userId = email;
                    });
        }
    }
}
