System.register(["./View", "../helpers/DateHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, DateHelper_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            },
            function (DateHelper_1_1) {
                DateHelper_1 = DateHelper_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
                    return `
                    
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>   
                    <tbody class="tabela">
                        ${model.negociacoes.map(negociacao => {
                        return `
                                <tr>
                                    <td>${DateHelper_1.DateHelper.dateToString(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `;
                    }).join("")}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
