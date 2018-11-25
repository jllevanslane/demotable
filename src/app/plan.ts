//
// An interface representing a training plan.
//
export interface IPlan {
    id:        number,
    fse:       string,
    skillSet:  string,
    state:     string,
    started:   string,
    completed: string
}
