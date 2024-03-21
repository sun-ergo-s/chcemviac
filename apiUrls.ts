/*
*   vráti napr. 6 najnovších príspevkov - kombinácia článok|audio|video
*/
const latestPosts = "/latestPosts"

/**
 *  vráti príspevok pre dané ID - môže byť článok|audio|video
 */
const post = "/post/{post_id}"

/**
 *  vráti príspevky pre dané ID tagu - na každú stranu napr. 10 aj s pagináciou pre ďalšiu stranu, koľko ich je dokopy, ktorá posledná strana a pod...
 */
const tag = "/tags/{tag_id}"

/**
 *  vráti všetky tagy
 */
const tags = "/tags"

/**
 *  vráti príspevky pre dané ID autora  - na každú stranu napr. 10 aj s pagináciou pre ďalšiu stranu, koľko ich je dokopy, ktorá posledná strana a pod...
 */
const author = "/authors/{author_id}"

/**
 *  vráti všetkých autorov
 */
const authors = "/authors"

/**
 *  vráti príspevky v kategórii "článok" - na každú stranu napr. 10 aj s pagináciou pre ďalšiu stranu, koľko ich je dokopy, ktorá posledná strana a pod...
 */
const articles = "/articles"

/**
 *  vráti príspevky v kategórii "audio" - na každú stranu napr. 10 aj s pagináciou pre ďalšiu stranu, koľko ich je dokopy, ktorá posledná strana a pod...
 */
const audios = "/audios"

/**
 *  vráti príspevky v kategórii "video" - na každú stranu napr. 10 aj s pagináciou pre ďalšiu stranu, koľko ich je dokopy, ktorá posledná strana a pod...
 */
const videos = "/videos"