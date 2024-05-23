import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const ErrorInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // Server-side error
                switch (error.status) {
                    case 400:
                        errorMessage = error?.error?.title || 'Bad Request';
                        break;
                    case 401:
                        errorMessage = error?.error?.title || 'Unauthorized';
                        break;
                    case 404:
                        errorMessage = error?.error?.title || 'Not Found';
                        break;
                    case 500:
                        errorMessage = error?.error?.title || 'Internal Server Error';
                        break;
                    case 422:
                        errorMessage = error?.error?.title || 'Validation Error';
                        break;
                    default:
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
            }
            console.log(error.error);
            return throwError(error.error);
        })
    );
};