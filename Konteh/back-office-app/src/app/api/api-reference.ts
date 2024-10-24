//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.1.0.0 (NJsonSchema v11.0.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IQuestionsClient {
    paginate(questionText: string | null | undefined, page: number | undefined, pageSize: number | undefined): Observable<SearchQuestionsResponse>;
    getQuestionById(id: number): Observable<GetQuestionByIdResponse>;
    createOrUpdateQuestion(command: CreateUpdateQuestionCommand): Observable<void>;
    getAll(): Observable<GetAllQuestionsResponse[]>;
    deleteById(questionId: number): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class QuestionsClient implements IQuestionsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "https://localhost:7184";
    }

    paginate(questionText: string | null | undefined, page: number | undefined, pageSize: number | undefined): Observable<SearchQuestionsResponse> {
        let url_ = this.baseUrl + "/questions/search?";
        if (questionText !== undefined && questionText !== null)
            url_ += "QuestionText=" + encodeURIComponent("" + questionText) + "&";
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.");
        else if (page !== undefined)
            url_ += "Page=" + encodeURIComponent("" + page) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processPaginate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processPaginate(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SearchQuestionsResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SearchQuestionsResponse>;
        }));
    }

    protected processPaginate(response: HttpResponseBase): Observable<SearchQuestionsResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = SearchQuestionsResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getQuestionById(id: number): Observable<GetQuestionByIdResponse> {
        let url_ = this.baseUrl + "/questions/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetQuestionById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetQuestionById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GetQuestionByIdResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GetQuestionByIdResponse>;
        }));
    }

    protected processGetQuestionById(response: HttpResponseBase): Observable<GetQuestionByIdResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GetQuestionByIdResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    createOrUpdateQuestion(command: CreateUpdateQuestionCommand): Observable<void> {
        let url_ = this.baseUrl + "/questions";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateOrUpdateQuestion(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateOrUpdateQuestion(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processCreateOrUpdateQuestion(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ValidationProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getAll(): Observable<GetAllQuestionsResponse[]> {
        let url_ = this.baseUrl + "/questions";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GetAllQuestionsResponse[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GetAllQuestionsResponse[]>;
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<GetAllQuestionsResponse[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(GetAllQuestionsResponse.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    deleteById(questionId: number): Observable<boolean> {
        let url_ = this.baseUrl + "/questions/{questionId}";
        if (questionId === undefined || questionId === null)
            throw new Error("The parameter 'questionId' must be defined.");
        url_ = url_.replace("{questionId}", encodeURIComponent("" + questionId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<boolean>;
                }
            } else
                return _observableThrow(response_) as any as Observable<boolean>;
        }));
    }

    protected processDeleteById(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class SearchQuestionsResponse implements ISearchQuestionsResponse {
    items?: SearchQuestionsResponseItem[];
    pageCount?: number;

    constructor(data?: ISearchQuestionsResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(SearchQuestionsResponseItem.fromJS(item));
            }
            this.pageCount = _data["pageCount"];
        }
    }

    static fromJS(data: any): SearchQuestionsResponse {
        data = typeof data === 'object' ? data : {};
        let result = new SearchQuestionsResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["pageCount"] = this.pageCount;
        return data;
    }
}

export interface ISearchQuestionsResponse {
    items?: SearchQuestionsResponseItem[];
    pageCount?: number;
}

export class SearchQuestionsResponseItem implements ISearchQuestionsResponseItem {
    id?: number;
    text?: string;
    category?: QuestionCategory;

    constructor(data?: ISearchQuestionsResponseItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.category = _data["category"];
        }
    }

    static fromJS(data: any): SearchQuestionsResponseItem {
        data = typeof data === 'object' ? data : {};
        let result = new SearchQuestionsResponseItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["category"] = this.category;
        return data;
    }
}

export interface ISearchQuestionsResponseItem {
    id?: number;
    text?: string;
    category?: QuestionCategory;
}

export enum QuestionCategory {
    OOP = 1,
    General = 2,
    Git = 3,
    Testing = 4,
    Sql = 5,
    Csharp = 6,
}

export class GetQuestionByIdResponse implements IGetQuestionByIdResponse {
    id?: number;
    text?: string;
    category?: QuestionCategory;
    type?: QuestionType;
    answers?: GetQuestionByIdAnswerDto[];

    constructor(data?: IGetQuestionByIdResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.category = _data["category"];
            this.type = _data["type"];
            if (Array.isArray(_data["answers"])) {
                this.answers = [] as any;
                for (let item of _data["answers"])
                    this.answers!.push(GetQuestionByIdAnswerDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetQuestionByIdResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetQuestionByIdResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["category"] = this.category;
        data["type"] = this.type;
        if (Array.isArray(this.answers)) {
            data["answers"] = [];
            for (let item of this.answers)
                data["answers"].push(item.toJSON());
        }
        return data;
    }
}

export interface IGetQuestionByIdResponse {
    id?: number;
    text?: string;
    category?: QuestionCategory;
    type?: QuestionType;
    answers?: GetQuestionByIdAnswerDto[];
}

export enum QuestionType {
    RadioButton = 1,
    CheckBox = 2,
}

export class GetQuestionByIdAnswerDto implements IGetQuestionByIdAnswerDto {
    id?: number;
    text?: string;
    isCorrect?: boolean;
    isDeleted?: boolean;

    constructor(data?: IGetQuestionByIdAnswerDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.isCorrect = _data["isCorrect"];
            this.isDeleted = _data["isDeleted"];
        }
    }

    static fromJS(data: any): GetQuestionByIdAnswerDto {
        data = typeof data === 'object' ? data : {};
        let result = new GetQuestionByIdAnswerDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["isCorrect"] = this.isCorrect;
        data["isDeleted"] = this.isDeleted;
        return data;
    }
}

export interface IGetQuestionByIdAnswerDto {
    id?: number;
    text?: string;
    isCorrect?: boolean;
    isDeleted?: boolean;
}

export class ProblemDetails implements IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data;
    }
}

export interface IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export class HttpValidationProblemDetails extends ProblemDetails implements IHttpValidationProblemDetails {
    errors?: { [key: string]: string[]; };

    [key: string]: any;

    constructor(data?: IHttpValidationProblemDetails) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if (_data["errors"]) {
                this.errors = {} as any;
                for (let key in _data["errors"]) {
                    if (_data["errors"].hasOwnProperty(key))
                        (<any>this.errors)![key] = _data["errors"][key] !== undefined ? _data["errors"][key] : [];
                }
            }
        }
    }

    static override fromJS(data: any): HttpValidationProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new HttpValidationProblemDetails();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if (this.errors) {
            data["errors"] = {};
            for (let key in this.errors) {
                if (this.errors.hasOwnProperty(key))
                    (<any>data["errors"])[key] = (<any>this.errors)[key];
            }
        }
        super.toJSON(data);
        return data;
    }
}

export interface IHttpValidationProblemDetails extends IProblemDetails {
    errors?: { [key: string]: string[]; };

    [key: string]: any;
}

export class ValidationProblemDetails extends HttpValidationProblemDetails implements IValidationProblemDetails {
    errors?: { [key: string]: string[]; };

    [key: string]: any;

    constructor(data?: IValidationProblemDetails) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if (_data["errors"]) {
                this.errors = {} as any;
                for (let key in _data["errors"]) {
                    if (_data["errors"].hasOwnProperty(key))
                        (<any>this.errors)![key] = _data["errors"][key] !== undefined ? _data["errors"][key] : [];
                }
            }
        }
    }

    static override fromJS(data: any): ValidationProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ValidationProblemDetails();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if (this.errors) {
            data["errors"] = {};
            for (let key in this.errors) {
                if (this.errors.hasOwnProperty(key))
                    (<any>data["errors"])[key] = (<any>this.errors)[key];
            }
        }
        super.toJSON(data);
        return data;
    }
}

export interface IValidationProblemDetails extends IHttpValidationProblemDetails {
    errors?: { [key: string]: string[]; };

    [key: string]: any;
}

export class CreateUpdateQuestionCommand implements ICreateUpdateQuestionCommand {
    id?: number | undefined;
    text?: string;
    category?: QuestionCategory;
    type?: QuestionType;
    answers?: CreateUpdateQuestionAnswerDto[];

    constructor(data?: ICreateUpdateQuestionCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.category = _data["category"];
            this.type = _data["type"];
            if (Array.isArray(_data["answers"])) {
                this.answers = [] as any;
                for (let item of _data["answers"])
                    this.answers!.push(CreateUpdateQuestionAnswerDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CreateUpdateQuestionCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateUpdateQuestionCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["category"] = this.category;
        data["type"] = this.type;
        if (Array.isArray(this.answers)) {
            data["answers"] = [];
            for (let item of this.answers)
                data["answers"].push(item.toJSON());
        }
        return data;
    }
}

export interface ICreateUpdateQuestionCommand {
    id?: number | undefined;
    text?: string;
    category?: QuestionCategory;
    type?: QuestionType;
    answers?: CreateUpdateQuestionAnswerDto[];
}

export class CreateUpdateQuestionAnswerDto implements ICreateUpdateQuestionAnswerDto {
    id?: number;
    text?: string;
    isCorrect?: boolean;
    isDeleted?: boolean;

    constructor(data?: ICreateUpdateQuestionAnswerDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.isCorrect = _data["isCorrect"];
            this.isDeleted = _data["isDeleted"];
        }
    }

    static fromJS(data: any): CreateUpdateQuestionAnswerDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateUpdateQuestionAnswerDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["isCorrect"] = this.isCorrect;
        data["isDeleted"] = this.isDeleted;
        return data;
    }
}

export interface ICreateUpdateQuestionAnswerDto {
    id?: number;
    text?: string;
    isCorrect?: boolean;
    isDeleted?: boolean;
}

export class GetAllQuestionsResponse implements IGetAllQuestionsResponse {
    id?: number;
    text?: string;
    category?: QuestionCategory;

    constructor(data?: IGetAllQuestionsResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.category = _data["category"];
        }
    }

    static fromJS(data: any): GetAllQuestionsResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetAllQuestionsResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["category"] = this.category;
        return data;
    }
}

export interface IGetAllQuestionsResponse {
    id?: number;
    text?: string;
    category?: QuestionCategory;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}